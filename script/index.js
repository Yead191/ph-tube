function getTimeString(time) {
    // get hour and rest sec
    const hour = parseInt(time / 3600)
    let remainingSecond = parseInt(time % 3600)
    const min = parseInt(remainingSecond / 60)
    remainingSecond = remainingSecond % 60

    return `${hour} hour ${min} min ago`


}

// fetch, load and show categories on html

// create loadCategories

const loadCategories = async () => {

    // fetch
    const response = await fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    const data = await response.json()
    displayCategories(data.categories)


    // console.log(data);
}

// fetch videos
const loadVideos = async () => {

    // fetch
    const response = await fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    const data = await response.json()
    displayVideos(data.videos)

    console.log(data);
}

// const obj =
// {
//     "category_id": "1001",
//     "video_id": "aaaa",
//     "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
//     "title": "Shape of You",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
//             "profile_name": "Olivia Mitchell",
//             "verified": ""
//         }
//     ],
//     "others": {
//         "views": "100K",
//         "posted_date": "16278"
//     },
//     "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
// }

const displayVideos = (videos) => {

    const videosContainer = document.getElementById('videos-container')

    videos.forEach(video => {
        const div = document.createElement('div')
        div.classList = 'card card-compact '

        div.innerHTML = `
        <figure class='relative'>
    <img class='w-full h-[248px] object-cover'
      src=${video.thumbnail} />
      ${video.others.posted_date?.length == 0 ? '': `<span class='absolute right-2 bottom-2 bg-black text-white rounded p-1'>${getTimeString(video.others.posted_date)}</span>`}
      
  </figure>
  <div class="px-0 py-2 flex gap-4">

  <div>
  <img class='w-10 h-10 rounded-full object-cover'
      src=${video.authors[0].profile_picture} />
  </div>

  <div>
  <h3 class='font-bold'>${video.title} </h3>
  <div class='flex gap-2'>
  <P class='text-sm text-gray-500'>${video.authors[0].profile_name}</P>
  ${video.authors[0].verified== true ? `<img class='h-5 w-5 rounded-full object-cover'
      src='assets/verify.png'/>
` : ''}

  </div>
  <p class='text-xs text-gray-400 mt-1'>${video.others.views} views</p>
  
  </div>

    
    
  </div>

        
        `
        videosContainer.append(div)
        console.log(video);

    });

}


// display videos


// Display Categories
const displayCategories = (categories) => {
    // console.log(data);
    const categoriesContainer = document.getElementById('categories')

    categories.forEach(item => {
        // console.log(item);
        // create a button
        const button = document.createElement('button')
        button.classList = 'btn'
        button.innerText = item.category
        // add button to category container
        categoriesContainer.append(button)
    });
}




loadCategories()
loadVideos()