require 'csv'

class CsvFileJob < ApplicationJob
  queue_as :default

  def perform(user)
    csv_string = CSV.generate do |csv|
      csv << ["Name", "Email", "Residence", "Hobbies"]
      hobbies = user.hobbies.pluck(:interest).join(', ')
      csv << [user.last_name, user.email, user.residence, hobbies]
    end

    csv_string
  end
end
