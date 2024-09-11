import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import { usePostBlogMutation } from '../../../redux/features/blogs/blogsApi';
import { useNavigate } from 'react-router-dom'

const AddPost = () => {
  const editorRef = useRef(null);
  const [title, setTitle] = useState('');
  const [coverImg, setCoverImg] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [category, setCategory] = useState('');
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState('');

  const [postBlog, {isLoading}] = usePostBlogMutation();

  const {user} = useSelector((state) => state.auth);

  useEffect(() => {
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
      }
    });

    return () => {
      editor.destroy();
      editorRef.current = null;
    };
  }, []);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const content = await editorRef.current.save();
      const newPost = {
        title,
        coverImg,
        description: metaDescription,
        category,
        rating,
        content,
        author: user?._id
      }
      // console.log(newPost)
      const response = await postBlog(newPost).unwrap();
      console.log(response);
      alert('Blog post created successfully!');
      navigate('/');

    } catch (error) {
      console.log("Error creating post:", error);
      setMessage('Error creating blog post. Please try again.');
    }
  };

  return (
    <div className='bg-white md:p-8 p-2'>
      <h2 className='text-2xl font-semibold'>Create A New Blog Post</h2>
      <form onSubmit={handleSubmit} className='space-y-5 pt-8'>
        <div className='space-y-4'>
          <label className='font-semibold text-xl'>Blog Title:</label>
          <input 
            type="text" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3'
            placeholder='Ex: 15 AI tools.....' 
            required 
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
                value={coverImg}
                onChange={(e) => setCoverImg(e.target.value)}
                className='w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3'
                placeholder='Ex: https://blogphoto.com/s/photos/....' 
                required 
              />
            </div>

            {/* Category */}
            <div className='space-y-4'>
              <label className='font-semibold'>Category:</label>
              <input 
                type="text" 
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className='w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3'
                placeholder='Category.....' 
                required 
              />
            </div>

            {/* Meta Data */}
            <div className='space-y-4'>
              <label className='font-semibold'>Meta Description:</label>
              <textarea 
                type="text" 
                cols={4}
                rows={4}
                value={metaDescription}
                onChange={(e) => setMetaDescription(e.target.value)}
                className='w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3'
                placeholder='Write your blog meta description' 
                required 
              />
            </div>

            {/* Ratings */}
            <div className='space-y-4'>
              <label className='font-semibold'>Rating:</label>
              <input 
                type="number" 
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                className='w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3'
                required 
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
        >Add New Blog</button>
      </form>
    </div>
  )
}

export default AddPost;
