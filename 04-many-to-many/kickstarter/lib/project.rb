class Project
  attr_reader :title

  def initialize(title)
    @title = title
  end

  def commitments
    BackedProject.all.select do |backed_project|
      backed_project.project == self
    end
  end

  def backers
    # where is the data?
    # BackedProject.all
    # how do we transform it?
    # select the ones that belong to this project
    # map to the backers
    commitments.map do |backed_project|
      backed_project.backer
    end
  end

  def add_backer(backer)
    BackedProject.new(backer, self)
  end
end
