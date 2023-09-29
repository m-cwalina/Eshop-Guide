class Hobby < ApplicationRecord
  belongs_to :user
  validates :interest, presence: true
end
