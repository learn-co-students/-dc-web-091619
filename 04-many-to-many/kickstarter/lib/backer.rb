class Backer
  attr_reader :name
  @@all = []

  def initialize(name)
    @name = name
    @@all << self
  end

  def self.all
    @@all
  end

  def commitments
    # where is the data?
    # BackedProject.all
    # how do we transform it?
    # select the projects for this backer

    BackedProject.all.select do |backed_project|
      backed_project.backer == self
    end
  end

  def backed_projects
    # map the backed projects to projects
    commitments.map do |backed_project|
      backed_project.project
    end
  end

  def back_project(project)
    BackedProject.new(self, project)
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
