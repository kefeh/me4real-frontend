import React from 'react'
import { Card, Button, Image} from 'react-bootstrap'

function NewsDetail(params) {
    return(
        <div className="container">
            <div className="center" >

            <Card style={{ width: '60rem' }}>     
                <div className="pull-right">
                    <span> Admin </span>. <span> Sep 25 </span>. <span> 1 min read</span>     <span className="pull-right"> ...</span>              
                </div>
                    

                    <Card.Title>Female Robotics Team Wins Major Award</Card.Title>
                    <Card.Body>Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.</Card.Body>
                {/* <Card.Img variant="top" src="/carousel.png" /> */}
                    <div style={{ textAlign: 'center'}}><img variant="top" src="/carousel.png" height="450px" width='750px' /></div>
                <Card.Body>
                    <Card.Text>
                        <p style={{lineHeight: 1.5}} >
                        Welcome to your blog post.
                                 Use this space to connect with your readers and potential customers in a way that’s current and interesting.
                                  Think of it as an ongoing conversation where you can share updates about business, trends, news, and more. 
                       <cite>Do you have a design in mind for your blog? Whether you prefer a trendy postcard look or you’re going for a more editorial style blog - there’s a stunning layout for everyone.</cite>
                       You’ll be posting loads of engaging content, so be sure to keep your blog organized with Categories that also allow visitors to explore more of what interests them. 
                             Create Relevant Content 
                             Writing a blog is a great way to position yourself as an authority in your field and captivate your readers’ attention.
                             Do you want to improve your site’s SEO ranking? Consider topics that focus on relevant keywords and relate back to your website or business. 
                             You can also add hashtags (#vacation #dream #summer) throughout your posts to reach more people, and help visitors search for relevant content. 
                         Blogging gives your site a voice, so let your business’ personality shine through. Choose a great image to feature in your post or add a video for extra engagement.
                         Are you ready to get started? Simply create a new post now. 
                                        </p>
</Card.Text>
                </Card.Body>
                <Card.Body>
                    <hr />
                        <glypicon glyph="search" />

                        some social media icons here 
                    <hr /> 
                </Card.Body>
            </Card>
            
            </div>
        </div>
    )
}

export default NewsDetail