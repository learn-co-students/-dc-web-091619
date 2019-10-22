class User < ApplicationRecord

    def display_name
        return self.username.capitalize
    end

    
end
