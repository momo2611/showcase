import { defineStore } from "pinia";

export const useProjectStore = defineStore('project', () => {
    const projects = [
        {
            title: 'Photograph of this Year',
            cover: 'https://cdn.myportfolio.com/96d1fb56-926a-4913-b087-b9739a916216/560976d3-21ac-431d-8c67-3d7516f570c7_rwc_0x0x1536x2045x640.jpg?h=144f03f2c24ee1a0ea049c0e78ec62f2',
            publishYear: 2023,
            category: "commercial",
            photos: [
                'https://cdn.myportfolio.com/96d1fb56-926a-4913-b087-b9739a916216/560976d3-21ac-431d-8c67-3d7516f570c7_rwc_0x0x1536x2045x640.jpg?h=144f03f2c24ee1a0ea049c0e78ec62f2',
                'https://cdn.myportfolio.com/96d1fb56-926a-4913-b087-b9739a916216/e7045506-69b8-4dd6-a8a1-46bc768505ac_rw_1200.JPG?h=9e4f5d9c25148d0f3c40a04bd51a05cc',
            ]
        },
        {
            title: 'Tell them about',
            cover: 'https://cdn.myportfolio.com/96d1fb56-926a-4913-b087-b9739a916216/560976d3-21ac-431d-8c67-3d7516f570c7_rwc_0x0x1536x2045x640.jpg?h=144f03f2c24ee1a0ea049c0e78ec62f2',
            publishYear: 1996,
            category: "commercial",
            photos: [
                'https://cdn.myportfolio.com/96d1fb56-926a-4913-b087-b9739a916216/560976d3-21ac-431d-8c67-3d7516f570c7_rwc_0x0x1536x2045x640.jpg?h=144f03f2c24ee1a0ea049c0e78ec62f2',
                'https://cdn.myportfolio.com/96d1fb56-926a-4913-b087-b9739a916216/e7045506-69b8-4dd6-a8a1-46bc768505ac_rw_1200.JPG?h=9e4f5d9c25148d0f3c40a04bd51a05cc',
            ]
        },
        {
            title: 'Tell them about',
            cover: 'https://cdn.myportfolio.com/96d1fb56-926a-4913-b087-b9739a916216/560976d3-21ac-431d-8c67-3d7516f570c7_rwc_0x0x1536x2045x640.jpg?h=144f03f2c24ee1a0ea049c0e78ec62f2',
            publishYear: 1996,
            category: "commercial",
            photos: [
                'https://cdn.myportfolio.com/96d1fb56-926a-4913-b087-b9739a916216/f758fa0c-87a1-4ed5-a435-f94624e605d0_carw_3x4x640.jpeg?h=320373e1b2c49d6558c31c9af5af1ec0',
                'https://cdn.myportfolio.com/96d1fb56-926a-4913-b087-b9739a916216/e7045506-69b8-4dd6-a8a1-46bc768505ac_rw_1200.JPG?h=9e4f5d9c25148d0f3c40a04bd51a05cc',
            ]
        },
        {
            title: 'Tell them about',
            cover: 'https://cdn.myportfolio.com/96d1fb56-926a-4913-b087-b9739a916216/560976d3-21ac-431d-8c67-3d7516f570c7_rwc_0x0x1536x2045x640.jpg?h=144f03f2c24ee1a0ea049c0e78ec62f2',
            publishYear: 1996,
            category: "commercial",
            photos: [
                'https://cdn.myportfolio.com/96d1fb56-926a-4913-b087-b9739a916216/560976d3-21ac-431d-8c67-3d7516f570c7_rwc_0x0x1536x2045x640.jpg?h=144f03f2c24ee1a0ea049c0e78ec62f2',
                'https://cdn.myportfolio.com/96d1fb56-926a-4913-b087-b9739a916216/e7045506-69b8-4dd6-a8a1-46bc768505ac_rw_1200.JPG?h=9e4f5d9c25148d0f3c40a04bd51a05cc',
            ]
        },
        {
            title: 'Tell them about',
            cover: 'https://cdn.myportfolio.com/96d1fb56-926a-4913-b087-b9739a916216/560976d3-21ac-431d-8c67-3d7516f570c7_rwc_0x0x1536x2045x640.jpg?h=144f03f2c24ee1a0ea049c0e78ec62f2',
            publishYear: 1996,
            category: "commercial",
            photos: [
                'https://cdn.myportfolio.com/96d1fb56-926a-4913-b087-b9739a916216/f758fa0c-87a1-4ed5-a435-f94624e605d0_carw_3x4x640.jpeg?h=320373e1b2c49d6558c31c9af5af1ec0',
                'https://cdn.myportfolio.com/96d1fb56-926a-4913-b087-b9739a916216/e7045506-69b8-4dd6-a8a1-46bc768505ac_rw_1200.JPG?h=9e4f5d9c25148d0f3c40a04bd51a05cc',
            ]
        },
        {
            title: 'Tell them about',
            cover: 'https://cdn.myportfolio.com/96d1fb56-926a-4913-b087-b9739a916216/560976d3-21ac-431d-8c67-3d7516f570c7_rwc_0x0x1536x2045x640.jpg?h=144f03f2c24ee1a0ea049c0e78ec62f2',
            publishYear: 1996,
            category: "commercial",
            photos: [
                'https://cdn.myportfolio.com/96d1fb56-926a-4913-b087-b9739a916216/f758fa0c-87a1-4ed5-a435-f94624e605d0_carw_3x4x640.jpeg?h=320373e1b2c49d6558c31c9af5af1ec0',
                'https://cdn.myportfolio.com/96d1fb56-926a-4913-b087-b9739a916216/e7045506-69b8-4dd6-a8a1-46bc768505ac_rw_1200.JPG?h=9e4f5d9c25148d0f3c40a04bd51a05cc',
            ]
        },
        {
            title: 'Tell them about',
            cover: 'https://cdn.myportfolio.com/96d1fb56-926a-4913-b087-b9739a916216/560976d3-21ac-431d-8c67-3d7516f570c7_rwc_0x0x1536x2045x640.jpg?h=144f03f2c24ee1a0ea049c0e78ec62f2',
            publishYear: 1996,
            category: "commercial",
            photos: [
                'https://cdn.myportfolio.com/96d1fb56-926a-4913-b087-b9739a916216/f758fa0c-87a1-4ed5-a435-f94624e605d0_carw_3x4x640.jpeg?h=320373e1b2c49d6558c31c9af5af1ec0',
                'https://cdn.myportfolio.com/96d1fb56-926a-4913-b087-b9739a916216/e7045506-69b8-4dd6-a8a1-46bc768505ac_rw_1200.JPG?h=9e4f5d9c25148d0f3c40a04bd51a05cc',
            ]
        },
        {
            title: 'Tell them about',
            cover: 'https://cdn.myportfolio.com/96d1fb56-926a-4913-b087-b9739a916216/560976d3-21ac-431d-8c67-3d7516f570c7_rwc_0x0x1536x2045x640.jpg?h=144f03f2c24ee1a0ea049c0e78ec62f2',
            publishYear: 1996,
            category: "commercial",
            photos: [
                'https://cdn.myportfolio.com/96d1fb56-926a-4913-b087-b9739a916216/f758fa0c-87a1-4ed5-a435-f94624e605d0_carw_3x4x640.jpeg?h=320373e1b2c49d6558c31c9af5af1ec0',
                'https://cdn.myportfolio.com/96d1fb56-926a-4913-b087-b9739a916216/e7045506-69b8-4dd6-a8a1-46bc768505ac_rw_1200.JPG?h=9e4f5d9c25148d0f3c40a04bd51a05cc',
            ]
        },
        {
            title: 'Tell them about',
            cover: 'https://cdn.myportfolio.com/96d1fb56-926a-4913-b087-b9739a916216/560976d3-21ac-431d-8c67-3d7516f570c7_rwc_0x0x1536x2045x640.jpg?h=144f03f2c24ee1a0ea049c0e78ec62f2',
            publishYear: 1996,
            category: "commercial",
            photos: [
                'https://cdn.myportfolio.com/96d1fb56-926a-4913-b087-b9739a916216/f758fa0c-87a1-4ed5-a435-f94624e605d0_carw_3x4x640.jpeg?h=320373e1b2c49d6558c31c9af5af1ec0',
                'https://cdn.myportfolio.com/96d1fb56-926a-4913-b087-b9739a916216/e7045506-69b8-4dd6-a8a1-46bc768505ac_rw_1200.JPG?h=9e4f5d9c25148d0f3c40a04bd51a05cc',
            ]
        },
        {
            title: 'Tell them about',
            cover: 'https://cdn.myportfolio.com/96d1fb56-926a-4913-b087-b9739a916216/560976d3-21ac-431d-8c67-3d7516f570c7_rwc_0x0x1536x2045x640.jpg?h=144f03f2c24ee1a0ea049c0e78ec62f2',
            publishYear: 1996,
            category: "commercial",
            photos: [
                'https://cdn.myportfolio.com/96d1fb56-926a-4913-b087-b9739a916216/f758fa0c-87a1-4ed5-a435-f94624e605d0_carw_3x4x640.jpeg?h=320373e1b2c49d6558c31c9af5af1ec0',
                'https://cdn.myportfolio.com/96d1fb56-926a-4913-b087-b9739a916216/e7045506-69b8-4dd6-a8a1-46bc768505ac_rw_1200.JPG?h=9e4f5d9c25148d0f3c40a04bd51a05cc',
            ]
        },
        {
            title: 'Tell them about',
            cover: 'https://cdn.myportfolio.com/96d1fb56-926a-4913-b087-b9739a916216/560976d3-21ac-431d-8c67-3d7516f570c7_rwc_0x0x1536x2045x640.jpg?h=144f03f2c24ee1a0ea049c0e78ec62f2',
            publishYear: 1996,
            category: "magazine",
            photos: [
                'https://cdn.myportfolio.com/96d1fb56-926a-4913-b087-b9739a916216/e7045506-69b8-4dd6-a8a1-46bc768505ac_rw_1200.JPG?h=9e4f5d9c25148d0f3c40a04bd51a05cc',
                'https://cdn.myportfolio.com/96d1fb56-926a-4913-b087-b9739a916216/e7045506-69b8-4dd6-a8a1-46bc768505ac_rw_1200.JPG?h=9e4f5d9c25148d0f3c40a04bd51a05cc',
            ]
        },
        {
            title: 'Tell them about',
            cover: 'https://cdn.myportfolio.com/96d1fb56-926a-4913-b087-b9739a916216/560976d3-21ac-431d-8c67-3d7516f570c7_rwc_0x0x1536x2045x640.jpg?h=144f03f2c24ee1a0ea049c0e78ec62f2',
            publishYear: 1996,
            category: "magazine",
            photos: [
                'https://cdn.myportfolio.com/96d1fb56-926a-4913-b087-b9739a916216/e7045506-69b8-4dd6-a8a1-46bc768505ac_rw_1200.JPG?h=9e4f5d9c25148d0f3c40a04bd51a05cc',
                'https://cdn.myportfolio.com/96d1fb56-926a-4913-b087-b9739a916216/e7045506-69b8-4dd6-a8a1-46bc768505ac_rw_1200.JPG?h=9e4f5d9c25148d0f3c40a04bd51a05cc',
            ]
        },
    ]
    return { projects }
})