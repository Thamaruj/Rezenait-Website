import { defineField, defineType } from "sanity";

export default defineType({
    name: "SuccessStories",
    title: 'All Success Stories ',
    type: 'document',

    fields:[
        defineField({
            name:'storyName',
            title:"Story Title",
            type:'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name:'problem',
            title: 'Problem',
            type: 'string',
            validation:(Rule) => Rule.required(),
        }),
        defineField({
            name:'solution',
            title: 'Solution',
            type: 'string',
            validation:(Rule) => Rule.required(),
        }),
        defineField({
            name:'description',
            title: 'Stoty Description',
            type: 'text',
            validation:(Rule) => Rule.required(),
        }),
        defineField({
            name:'image',
            title: 'Story Image',
            type: 'image',
            options:{hotspot:true},
            validation:(Rule) => Rule.required(),
        })


    ],
})