import * as React from 'react';

import {editor} from '../../../index';
import DynamicStepper from './DynamicStepper';
import StepCheck from './StepCheck';
import VerifyButton from './VerifyButton';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {Step, StepContent, StepLabel} from 'material-ui/Stepper';
import {pink500} from 'material-ui/styles/colors';
// import {updateNpm} from '../../../reducers/checks/action-system';

class SystemChecks extends React.Component<{
checks: CR.Checks
}, {}> {
  public render(): any {
    const {system} = this.props.checks;
    if (system.passed) {
      return null;
    }
    const status = [system.node, system.npm];
    return (
    <Card className='cr-check'>
      <CardHeader
        title='System Checks'
        subtitle='CodeRoad requires several key dependencies'
      />
      <CardText>
        <DynamicStepper status={status}>
        <StepCheck
          label='Node >= 0.10'
          completed={system.node}
        >
          <p>Install a newer version of <a style={{color: pink500}} href='https://nodejs.org'>NodeJS</a></p>
          <p>Either version 4 (stable) or above.</p>
        </StepCheck>

        <StepCheck
          label='NPM >= 3'
          completed={system.npm}
        >
          Update your version of NPM.<br />
          <code>> npm update -g npm</code><br />
        </StepCheck>

        <StepCheck
          label={editor.version.label}
          completed={system.editor}
        >
          <p>{editor.version.failMessage}</p>
        </StepCheck>

        <StepCheck
          label='Xcode'
          completed={system.xcode}
        >
          <p>Install <a style={{color: pink500}} href='https://developer.apple.com/xcode/download/'>XCode</a></p>
        </StepCheck>
      </DynamicStepper>
    </CardText>
    <CardActions>
      <VerifyButton />
    </CardActions>
  </Card>
    );
  }
};
export default SystemChecks;
