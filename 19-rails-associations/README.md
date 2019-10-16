* Objectives
    - Review CRUD capabilities for single model
    - Create associations between two models
    - Use a dropdown select in a form
    - Create a model instance and its associated instances from a single form

* To do:
    - Build the form to create a new Retailer (with name and year_established)
    - Build appropriate actions on your controller to load and process the form to create a new Retailer

# Nested Forms
    - at top of parent model:  `accepts_nested_attributes_for :snacks` 
    - build nested form using `parent_form.fields_for`
    - `@retailer.snacks.build` in controller (new)
