class Student < ApplicationRecord
    belongs_to :house

    validates :first_name, presence: true
    validates :last_name, presence: true
    validates_inclusion_of :year, :in => 1..7

    def full_name
        return self.first_name + " " + self.last_name
    end
end
