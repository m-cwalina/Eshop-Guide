# == Schema Information
#
# Table name: hobbies
#
#  id         :bigint           not null, primary key
#  interest   :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :bigint           not null
#
# Indexes
#
#  index_hobbies_on_user_id  (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#
require "test_helper"

class HobbyTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
