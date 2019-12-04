class ApplicationController < ActionController::API

    def secret_key
        Rails.application.secrets.secret_key_base
    end 

    #return a token using JWT given some payload
    def encode(payload)
        JWT.encode(payload, secret_key, 'HS256')
        #return token
    end 

    #return the original payload given some token
    def decode(token)
        JWT.decode(token, secret_key, true, {algorithm: 'HS256'})[0]
        #return OG payload
    end 
end
