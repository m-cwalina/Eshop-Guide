FactoryBot.define do
  factory :user do
    sequence(:email) { |n| "#{n}@gmail.com" }  # This ensures each user has a unique email
    last_name { "Smith" }
    residence { "Berlin" }
    password { 'Password' }

    after(:create) do |user|
      create_list(:hobby, 2, user: user)
    end
  end
end
