class UsersController < ApplicationController
  before_action :authenticate_user!

  def edit
    @user = current_user
  end

  def update
    if current_user.update(user_params)
      redirect_to dashboard_path
    else
      render :edit
    end
  end

  def friends
    render json: UserService.new(current_user).find_friends
  end

  def export_csv_file
    csv_data = CsvFileJob.perform_now(current_user)
    send_data csv_data, filename: "UserProfile-#{current_user.id}.csv",
                        type: 'text/csv',
                        status: 201
  end

  private

  def user_params
    params.require(:user).permit(:last_name, :residence, hobbies_attributes: [:id, :interest, :_destroy])
  end
end
