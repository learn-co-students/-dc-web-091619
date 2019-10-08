- SWBAT build a form to create a new resource
- SWBAT build a form to edit an existing resource
- SWBAT build a link or a form to delete a resource
- SWBAT use method override to send actions other than GET and POST

To override Get/Post and use another verb:

Change method to Get/Post and include 
    ```rb
    <input type="hidden" name="_method" value="PUT">
    ```

At top of controller, 
    ```rb
    set :method_override, true
    ```