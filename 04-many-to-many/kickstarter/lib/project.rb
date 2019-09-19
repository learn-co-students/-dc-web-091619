class Project
  attr_reader :title

  def initialize(title)
    @title = title
  end

  def backers
    Backer.all.select do |backer|
      backer.backed_projects.include?(self)
    end
  end

  def add_backer(backer)
    backer.backed_projects << self
  end
end
