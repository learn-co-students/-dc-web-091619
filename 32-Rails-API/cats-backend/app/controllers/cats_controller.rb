class CatsController < ApplicationController
    def index 
    #     cats = Cat.all #array of just cat data 
    #                     #array cat data WITH hobby data
        
    #     cats_hobbies = cats.map{ |cat|
    #         {cat: cat, hobbies: cat.hobbies}
    #     }
        render json:  Cat.all.order(:id).to_json(serailized_data)
        # render json: Cat.all.to_json(:except => [:created_at, :updated_at ]
    end 

    def create
        #update my database, create new cat 
        newCat = Cat.create(cat_params)
        render json: newCat.to_json(serailized_data)
    end 

    def destroy
        cat = Cat.find(params["id"]).destroy
        #destory any dependencies
        render json: cat
    end

    def update
        Cat.find(params["id"]).update(cat_params)
        render json: Cat.find(params["id"]).to_json(serailized_data)
    end 

    private 
    def serailized_data
        {
            :include => {:hobbies => 
                {:except => [:created_at, :updated_at ]}
            },
            :except => [:created_at, :updated_at ]
        }
    end 

    def cat_params
        #return our hash
        params.require(:cat).permit(:name, :breed, :parent_name, :image)
    end 
end
