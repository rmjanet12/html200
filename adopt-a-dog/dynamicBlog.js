const blogPosts = [
    {
      headline: "Traveling With Your Dog",
      imageSrc: "images/patrick-hendry-221863-unsplash.jpg",
      altText: "Traveling With Your Dog",
      blogText: "Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat. Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam."
    },
    {
      headline: "How To Walk Multiple Dogs",
      imageSrc: "images/matt-nelson-259365-unsplash.jpg",
      altText: "How To Walk Multiple Dogs",
      blogText: "Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat. Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam."
    },
    {
      headline: "Teach Your Dog To Fetch!",
      imageSrc: "images/matt-nelson-259365-unsplash.jpg",
      altText: "Teach Your Dog To Fetch!",
      blogText: "Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat. Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam."
    }
  ];

  
  const blogPostsContainer = document.getElementById('blog-posts');

blogPosts.forEach((blogPost, index) => {
  const blogContainer = document.createElement('div');
  blogContainer.classList.add(`blog${index + 1}`);
  blogContainer.classList.add('blog-container');

  const blogImage = document.createElement('div');
  blogImage.classList.add('blog-image');
  blogImage.classList.add(`blog${index + 1}-image`);
  const img = document.createElement('img');
  img.classList.add('image-blog');
  img.src = blogPost.imageSrc;
  img.alt = blogPost.altText;
  blogImage.appendChild(img);

  const blogText = document.createElement('div');
  blogText.classList.add('blog-text');
  blogText.classList.add(`blog${index + 1}-text`);
  const heading = document.createElement('h2');
  heading.classList.add('heading-blog');
  heading.textContent = blogPost.headline;
  const text = document.createElement('p');
  text.classList.add('text-blog');
  text.textContent = blogPost.blogText;
  blogText.appendChild(heading);
  blogText.appendChild(text);

  blogContainer.appendChild(blogImage);
  blogContainer.appendChild(blogText);

  blogPostsContainer.appendChild(blogContainer);
});

const form = document.getElementById('myForm');

    form.addEventListener('submit', function(event) {
      event.preventDefault(); 
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;

      const formData = {
        name: name,
        email: email
      };

      alert('Thank you. The form information has been received');

     console.log(`This form has a username of ${name} and email of ${email}`); 
      
      
    });