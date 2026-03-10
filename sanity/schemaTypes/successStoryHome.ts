import { tr } from "framer-motion/m";
import { defineField, defineType } from "sanity";

export default defineType({
    name: "HomePageSuccessStories",
    title: 'Homepage Success Stories ',
    type: 'document',

    fields:[
        defineField({
            name:'storyName',
            title:'Story Title',
            type:'string',
            initialValue: 'Home Page Success Stories',
            readOnly: true
        }),
        defineField({
            name: 'featuredSuccessStories',
            title: 'Featured Success Stories',
            description: 'Add reviews here. You can drag and drop them to change the order they appear on the website!',
            type: 'array',
            // This is the magic part: an array of references pointing to your 'review' documents
            of: [{ type: 'reference', to: [{ type: 'SuccessStories' }] }], 
    }),
    ]
})