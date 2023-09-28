class UsersController < ApplicationController
  before_action :authenticate_user!

  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      redirect_to dashboard_path
    else
      render :edit
    end
  end

  def friends
    render json: UserService.new(current_user).find_friends
  end

  private

  def user_params
    params.require(:user).permit(:last_name, :residence, hobbies_attributes: [:id, :interest, :_destroy])
  end
end
