import { Routes } from '@angular/router';

import { UserListPage } from './features/users/user-list.component';
import { UserMessagesPage } from './features/users/user-messages.component';
import { ChannelListPage } from './features/channels/channel-list.component';
import { ChannelDetailsPage } from './features/channels/channel-details.component';

export const routes: Routes = [
  {
    path        : '',
    redirectTo  : 'users',
    pathMatch   : 'full'
  },
  {
    path        : 'users',
    component   : UserListPage
  },
  {
    path        : 'users/:id/messages',
    component   : UserMessagesPage
  },
  {
    path        : 'channels',
    component   : ChannelListPage
  },
  {
    path        : 'channels/:id',
    component   : ChannelDetailsPage
  }
];