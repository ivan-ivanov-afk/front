import { Component, OnInit } from '@angular/core';
import { ChannelService } from '../../services/channel.service';
import { Channel } from '../../models/channel.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  channels: Channel[] = [];

  constructor(private channelService: ChannelService) {}

  ngOnInit() {
    this.channelService.getAllChannels().subscribe(data => this.channels = data);
  }
}