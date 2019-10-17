class Snack < ApplicationRecord

    belongs_to :retailer
    
    def yumminess

        if is_yummy?
            return  "this is a yummy snack"
        else 
            return "this is not yummy"
        end
    end

    private

    def is_yummy?
        return self.deliciousness > 7
    end
end
