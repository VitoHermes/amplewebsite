import {createClient} from '@sanity/client'

export const client = createClient({
    projectId: 'yyu1omin',
    dataset: 'production',
    apiVersion: '2024-09-18',
    useCdn: false,
})