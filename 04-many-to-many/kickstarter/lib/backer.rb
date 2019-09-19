class Backer
  attr_reader :name, :backed_projects
  @@all = []

  def initialize(name)
    @name = name
    @backed_projects = []
    @@all << self
  end

  def self.all
    @@all
  end

  def back_project(project)
    @backed_projects << project
  end
end

# alternate solutions
# pick one class to store the relationship information and only keep it in one place
# chose: Backer
# - (maybe) delete add_backer from Project
# - change the add_backer method
# - *add backers array to Backer
# - change / delete back_project


# - add a class variable in backer to keep track of instances


# another class to store the relationship
