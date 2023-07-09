const PostSchema = require('../models/Post');

const resolvers = {
    Query: {
        getPosts: async () => {
            try {
                const posts = await PostSchema.find();

                return posts;
            }catch (error) {
                console.log('Posts GET Server Error');
            }
        },
        getPost: async (_, args) => {
            try {
                const { id } = args;

                const post = await PostSchema.findById(id);

                return post;
            }catch (error) {
                console.log('Post GET Server Error');
            }
        },
    },

    Mutation: {
        createPost: async (_, args) => {
            try {
                const { input } = args;
                const newPost = new PostSchema({
                    title: input.title,
                    description: input.description,
                    image: input.image
                });

                console.log(input);

                const savedPost = await newPost.save();

                return savedPost;
            }
            catch (error) {
                console.log('Post CREATE Server Error');
            }
        },
        updatePost: async (_, args) => {
            try {
                const { input } = args;

                const updatedPost = await PostSchema.findByIdAndUpdate(input.id, {
                    $set: input
                }, { new: true });

                return updatedPost;
            }catch (error) {
                console.log('Post DELETE Server Error');
            }
        },
        deletePost: async (_, args) => {
            try {
                const { id } = args;

                await PostSchema.findByIdAndDelete(id);

                return `${id} post has been deleted`;
            }catch (error) {
                console.log('Posts UPDATE Server Error');
            }
        }
    }
}

module.exports = resolvers;