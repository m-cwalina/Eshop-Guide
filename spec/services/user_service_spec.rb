require 'rails_helper'

RSpec.describe UserService do
  let(:user) { create(:user, residence: 'Berlin', hobbies: [create(:hobby, interest: 'Lifting'), create(:hobby, interest: 'Diving')]) }
  let(:service) { UserService.new(user) }

  describe '#find_friends' do
    context 'when users with the same interests exist in the same place of residence' do
      before do
        create(:user, residence: 'Berlin', hobbies: [create(:hobby, interest: 'Lifting')])
        create(:user, residence: 'Berlin', hobbies: [create(:hobby, interest: 'Diving')])
      end

      it 'finds friends with matching interests in the same place of residence' do
        friends = service.find_friends
        expect(friends.map(&:residence)).to all(eq('Berlin'))
        expect(friends).not_to be_empty
      end
    end

    context 'when there are no users with the same interests in the same place of residence' do
      before do
        create(:user, residence: 'New York', hobbies: [create(:hobby, interest: 'Lifting')])
        create(:user, residence: 'Paris', hobbies: [create(:hobby, interest: 'Diving')])
      end

      it 'finds friends with matching interests in a different place of residence' do
        friends = service.find_friends
        expect(friends.map(&:residence)).not_to include('Berlin')
        expect(friends).not_to be_empty
      end
    end

    context 'when no users with the same interests exist at all' do
      before do
        create(:user, residence: 'London', hobbies: [create(:hobby, interest: 'Swimming')])
      end

      it 'returns nil' do
        expect(service.find_friends).to be_nil
      end
    end
  end
end
