import * as React from 'react';
import { hashHistory } from 'react-router';
import * as toastr from 'toastr';
import { memberAPI } from '../../api/member';
import { MemberEntity } from '../../model';
import { ListBerita } from './listBerita';

interface State {
  member: MemberEntity;
}

export class NotificationController extends React.Component<{}, State> {
  constructor() {
    super();
  }
  render() {
    return (
        <div>
            asdfasdfasda
        </div>
    );
  }
}
