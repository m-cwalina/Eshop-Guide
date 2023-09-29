class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_many :hobbies, dependent: :destroy
  accepts_nested_attributes_for :hobbies, allow_destroy: true
  validates :residence, :last_name, presence: true

  def self.friend_in_area(user, interests)
    self.joins(:hobbies)
        .where(residence: user.residence)
        .where(hobbies: { interest: interests })
        .where.not(id: user.id)
        .distinct
  end

  def self.friend_anywhere(user, interests)
    self.joins(:hobbies)
        .where(hobbies: { interest: interests })
        .where.not(id: user.id)
        .distinct
  end
end
