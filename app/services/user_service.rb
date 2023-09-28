class UserService
  def initialize(user)
    @user = user
  end

  def find_friends
    interests = @user.hobbies.pluck(:interest)
    friend = User.friend_in_area(@user, interests)

    if friend.empty?
      friend = User.friend_anywhere(@user, interests)
    end

    return nil if friend.empty?

    friend
  end
end
