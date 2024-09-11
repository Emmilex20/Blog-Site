import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import { useFetchBlogByIdQuery, usePostBlogMutation, useUpdateBlogMutation } from '../../../redux/features/blogs/blogsApi';
import { useNavigate, useParams } from 'react-router-dom'

const UpdatePost = () => {
    const {id} = useParams();
    const editorRef = useRef(null);
  const [title, setTitle] = useState('');
  const [coverImg, setCoverImg] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [category, setCategory] = useState('');
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState('');

  const [updateBlog] = useUpdateBlogMutation();

 const {data: blogs={}, error, isLoading, refetch} = useFetchBlogByIdQuery(id);

  const {user} = useSelector((state) => state.auth);

  useEffect(() => {
    if (blogs.post) {
        const editor = new EditorJS({
            holder: 'editorjs', 
            onReady: () => {
              editorRef.current = editor;
            },
            autofocus: true,
            tools: {
              header: {
                class: Header, 
                inlineToolbar: true, 
              }, 
              list: { 
                class: List, 
                inlineToolbar: true,
              } 
            },
            data: blogs.post.content
          });
      
          return () => {
            editor.destroy();
            editorRef.current = null;
          };
    }
  }, []);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Ensure that the editor is initialized before trying to save
    if (!editorRef.current) {
      console.log("Editor is not initialized");
      setMessage("Error: Editor is not initialized.");
      return;
    }
  
    try {
      // Attempt to save the editor content
      const content = await editorRef.current.save();
      const updatedPost = {
        title: title || blogs.post.title,
        coverImg: coverImg || blogs.post.coverImg,
        description: metaDescription || blogs.post.description,
        category,
        rating: rating || blogs.post.rating,
        content,
        author: user?._id,
      };
      
      // Debugging: log the updated post
      console.log(updatedPost);
      
      // Send the updated blog to the backend
      const response = await updateBlog({ id, ...updatedPost }).unwrap();
      console.log(response);
      
      alert('Blog updated successfully!');
      refetch(); // Refresh the blog data to reflect the updated post
      navigate('/dashboard');
  
    } catch (error) {
      console.log("Error updating post:", error);
      setMessage('Error updating blog post. Please try again.');
    }
  };
  

  return (
    <div className='bg-white md:p-8 p-2'>
    <h2 className='text-2xl font-semibold'>Edit/Update Post</h2>
    <form onSubmit={handleSubmit} className='space-y-5 pt-8'>
      <div className='space-y-4'>
        <label className='font-semibold text-xl'>Blog Title:</label>
        <input 
          type="text" 
          defaultValue={blogs?.post?.title}
          onChange={(e) => setTitle(e.target.value)}
          className='w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3'
          placeholder='Ex: 15 AI tools.....' 
           
        />
      </div>

      {/* Blog Details */}
      <div className='flex flex-col md:flex-row justify-between items-start gap-4'>
        {/* Left side */}
        <div className='md:w-2/3 w-full'>
          <p className='font-semibold text-xl mb-5'>Content Section</p>
          <p className='text-xs italic'>Write your blog below....</p>
          <div id="editorjs"></div> {/* Make sure this ID is unique */}
        </div>

        {/* Right side */}
        <div className='md:w-1/3 w-full border p-5 space-y-5'>
          <p className='text-xl font-semibold'>Choose Blog Format</p>

          {/* Images */}
          <div className='space-y-4'>
            <label className='font-semibold'>Blog Cover:</label>
            <input 
              type="text" 
              defaultValue={blogs?.post?.coverImg}
              onChange={(e) => setCoverImg(e.target.value)}
              className='w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3'
              placeholder='Ex: https://blogphoto.com/s/photos/....' 
               
            />
          </div>

          {/* Category */}
          <div className='space-y-4'>
            <label className='font-semibold'>Category:</label>
            <input 
              type="text" 
              defaultValue={blogs?.post?.category}
              onChange={(e) => setCategory(e.target.value)}
              className='w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3'
              placeholder='Category.....' 
               
            />
          </div>

          {/* Meta Data */}
          <div className='space-y-4'>
            <label className='font-semibold'>Meta Description:</label>
            <textarea 
              type="text" 
              cols={4}
              rows={4}
              defaultValue={blogs?.post?.description}
              onChange={(e) => setMetaDescription(e.target.value)}
              className='w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3'
              placeholder='Write your blog meta description' 
               
            />
          </div>

          {/* Ratings */}
          <div className='space-y-4'>
            <label className='font-semibold'>Rating:</label>
            <input 
              type="number" 
              defaultValue={blogs?.post?.rating || 0}
              onChange={(e) => setRating(e.target.value)}
              className='w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3'
               
            />
          </div>

          {/* Author */}
          <div className='space-y-4'>
            <label className='font-semibold'>Author:</label>
            <input 
              type="text" 
              value={user.username}
              className='w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3'
              placeholder={`{user.username} (not editable)`}
              disabled 
            />
          </div>
        </div>
      </div>

      {
        message && <p className='text-red-500'>{message}</p>
      }
      <button type='submit' 
      disabled={isLoading}
      className='w-full mt-5 bg-primary hover:bg-indigo-500 text-white font-medium py-3 rounded-md'
      >Update Blog</button>
    </form>
  </div>
  )
}

export default UpdatePost