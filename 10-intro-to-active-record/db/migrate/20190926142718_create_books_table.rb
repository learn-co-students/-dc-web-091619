class CreateBooksTable < ActiveRecord::Migration[6.0]
  def change
    create_table :books do |t|
        t.string :title
    end
  end

  # def up 
  #   create_table.....
  #   log("I made a new table")
  # end

  # def down
  #   drop_table....
  #   email(boss, "I deleted a week's worth of work, thanks for nothing")
  # end
end
