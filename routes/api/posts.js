const express = require('express')
const uuid = require('uuid')
const routes = express.Router()
const posts = require('../../Posts')

// Get all posts
routes.get('/', (req, res) => res.json(posts))

// Get the posts based on the id
routes.get('/:id', (req, res) => {
    const foundPost = posts.some(post => post.id === parseInt(req.params.id))

    foundPost
        ? res.json(posts.filter(post => post.id === parseInt(req.params.id)))
        : res
              .status(400)
              .json({ message: `User id: ${req.params.id} not found` })
})

// Add new post
routes.post('/new', (req, res) => {
    const newPost = {
        userId: req.body.userId,
        id: uuid.v4(),
        title: req.body.title,
        body: req.body.body,
    }
    posts.push(newPost)
    res.json(posts)
})

// Modify existing post
routes.put('/:id', (req, res) => {
    const isPost = posts.some(post => post.id === parseInt(req.params.id))

    if (isPost) {
        const updatePost = req.body

        posts.forEach(post => {
            if (post.id === parseInt(req.params.id)) {
                id = updatePost.id ? updatePost.id : post.id
                userId: updatePost.userId ? updatePost.userId : post.userId
                title = updatePost.title ? updatePost.title : post.title
                body = updatePost.body ? updatePost.body : post.body

                res.json(post)
            }
        })
    } else {
        res.status(400).json({
            message: 'Update is not possible. Try again',
        })
    }
})

module.exports = routes
