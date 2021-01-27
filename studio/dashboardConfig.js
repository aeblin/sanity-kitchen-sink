export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6011d99c84ce3c00e0726f39',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-xre9r3j3',
                  apiId: '9cff88f2-7241-4a6b-b0fa-70582b50143d'
                },
                {
                  buildHookId: '6011d99d9651cf00bcc5a569',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-c6a89hhi',
                  apiId: 'e5840f8d-4bee-4991-9a19-b222f2d61ae0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/aeblin/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-c6a89hhi.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
