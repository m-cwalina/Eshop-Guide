class AddResidenceToUser < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :residence, :string
  end
end
