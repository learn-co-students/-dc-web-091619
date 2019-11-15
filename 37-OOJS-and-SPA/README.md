# OOJS and SPAs
- How can we use OOJS when building out Single Page Applications?

### Remember that Pokemon Teams lab?
- Imagine having an App class, a Trainer class, and a Pokemon class.

- We will create 1 instance of App when the DOM loads
- App will create 8 instances of Trainer
- Each Trainer will create many instance of Pokemon

App => Trainer => Pokemon

//render App instance onto the DOM 
<main></main>

//render 8 Trainer instances onto the DOM
<div class="card"></div>

//render our Pokemon instances onto the DOM
<li>Pikachu</li>

#### We have to make sure we pass the correct data to each instance!

```
<div class="card" data-id="1"><p>Prince</p>
  <button data-trainer-id="1">Add Pokemon</button>
  <ul>
    <li>Jacey (Kakuna) <button class="release" data-pokemon-id="140">Release</button></li>
    <li>Zachariah (Ditto) <button class="release" data-pokemon-id="141">Release</button></li>
    <li>Mittie (Farfetch'd) <button class="release" data-pokemon-id="149">Release</button></li>
    <li>Rosetta (Eevee) <button class="release" data-pokemon-id="150">Release</button></li>
    <li>Rod (Beedrill) <button class="release" data-pokemon-id="151">Release</button></li>
  </ul>
</div>
```
