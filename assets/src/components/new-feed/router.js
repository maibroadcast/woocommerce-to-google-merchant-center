import NewFeed from './new-feed.vue'
import ResetNewFeed from './reset-new-feed.vue'


wpspearWooGoolRegisterChildrenRoute('woogool_root', 
    [   
        {
            path: 'new-feed', 
            component: NewFeed,
            name: 'new_feed',
            
            children: [
                {
                    path: ':feed_id/edit', 
                    component: NewFeed,
                    name: 'new_feed_update',
                }
            ]

        },
        {
            path: 'reset-new-feed', 
            component: ResetNewFeed,
            name: 'reset_new_feed',
        }
        
    ]
);
