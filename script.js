const buttonElement = document.getElementById('btn');
let posts =[];
const container = document.querySelector('.container')
buttonElement.addEventListener('click',function(){
    console.log('clicked')
    const modalEle = document.querySelector('.modal');
    console.log(modalEle)
    modalEle.style.display = "block";
    

    let headingText = document.getElementById('enterheading');
    let blogText = document.getElementById('enterblog');

    // 
    
    const publishButton = document.getElementById('publish');
    const cancelButton = document.getElementById('cancel');
    const crossButton = document.getElementById('cross');
    crossButton.style.cursor="pointer"

    publishButton.addEventListener('click',function(){
        //
       
        
        // headingText.value="";
        // blogText.value =""
    
       /* const getHeadingData = document.querySelector('.myheading');
        const getBlogData = document.querySelector('.myblog');
        const contentData = document.querySelector('.content-1');
        
        getHeadingData.innerHTML = valueHead;
        getBlogData.innerHTML = valueBlog;

        contentData.style.display = "block";*/
        // const createContainer = document.createElement('div');
        // createContainer.classList.add('content-1');
        // createContainer.setAttribute('display','block');
        // const createH2 = document.createElement('h2');
        // const createP = document.createElement('p');
        // const createEditButton = document.createElement('button')
        // const createDeleteButton = document.createElement('button')
        // createH2.innerHTML = valueHead;
        // createH2.classList.add('myheading');
        // createP.innerHTML = valueBlog;
        // createP.classList.add('myblog');
        // createContainer.appendChild(createH2);
        // createContainer.appendChild(createP);
        // <h2 class="myheading">My Heading</h2>
        // <p class="myblog">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, molestiae ex. Provident distinctio ullam vitae eum ea similique deleniti quas. 
        //    Ipsum, earum dolore consequuntur ullam eveniet accusantium accusamus inventore perferendis! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore exercitationem asperiores ratione odit aliquid sint. Delectus tenetur eum ipsa! 
        //    Consequatur nulla praesentium explicabo porro laboriosam illo id obcaecati repellendus quod!</p>
        //    <button id="edit">Edit Post</button>
        //    <button id="delete">Delete Post</button>
        let heading = document.getElementById('enterheading');
        let content = document.getElementById('enterblog');
        // var valueHead = heading.value;
        // var valueBlog = content.value;
        //console.log(heading.value)
        let  contentData = document.querySelector('.content-1');
        contentData.innerHTML="";
        let newBlog = {
            heading : heading.value,
            content : content.value,

        } 
        
       posts.push(newBlog);

       posts.forEach(function(post){
        //console.log(post.heading);
        
        let createH2 = document.createElement('h2');
        createH2.classList.add('myheading');
        let createP = document.createElement('p');
        createP.classList.add('myblog');
        createH2.textContent = post.heading;
        createP.textContent = post.content;
        contentData.appendChild(createH2);
         contentData.appendChild(createP);
        const createEditButton = document.createElement('button')
        const createDeleteButton = document.createElement('button')
        createEditButton.setAttribute('id','edit')
        createDeleteButton.setAttribute('id','delete')
        createEditButton.innerText = "Edit Post"
        createDeleteButton.innerText = "Delete Post"
        contentData.appendChild(createEditButton);
        contentData.appendChild(createDeleteButton);
      
        contentData.style.display = "block";
        
         
         //container.appendChild(contentData);
        heading.value = "";
        content.value = "";
         modalEle.style.display="none";

       })
      









    })



        const getEditButton = document.getElementById('edit');
        
        const getEditModal = document.querySelector('.modal-edit')

        /*getEditButton.addEventListener('click',function(){
            
            getEditModal.style.display ='block';

            const editHeading =document.getElementById('editheading');
            const editBlog =document.getElementById('editblog');
            const saveBlog= document.getElementById('savepost');
            const deletePost = document.getElementById('deletepost')

            editHeading.value = valueHead;
            editBlog.value = valueBlog;
        })*/
              /*saveBlog.addEventListener('click',function(){
                const updateEditHead = document.getElementById('editheading');
                const updateEditBlog = document.getElementById('editblog');
                // var updateHead = updateEditBlog.value;
                // console.log(updateHead);
                // var updateBlog = updateEditBlog.value;
                
                getHeadingData.innerHTML = updateEditHead.value;
                getBlogData.innerHTML = updateEditBlog.value;
                 
                getEditModal.style.display="none";

                
              
              })

           deletePost.addEventListener('click',function(){
            contentData.style.display="none";
            getEditModal.style.display ="none";
           })

       

        const getDeleteButton = document.getElementById('delete');

        getDeleteButton.addEventListener('click',function(){
            contentData.style.display="none";
        })*/





    
    cancelButton.addEventListener('click',function(){
        modalEle.style.display="none";
        headingText.value="";
        blogText.value =""
    })
    crossButton.addEventListener('click',function(){
        modalEle.style.display="none";
        headingText.value="";
        blogText.value =""
    })


})