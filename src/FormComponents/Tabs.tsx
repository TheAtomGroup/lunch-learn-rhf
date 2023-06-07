import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { BasicFormOnSubmit } from './BasicFormOnSubmit';
import { RtfTextField } from './RtfTextField';
import { BasicFormOnBlur } from './BasicFormOnBlur';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
          <Typography component={"div"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Basic Form - on submit" />
          <Tab label="Basic Form - on blur" />
          <Tab label="wysiwyg Form" />
          <Tab label="Advanced Funnel / Wizard Form" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <BasicFormOnSubmit />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <BasicFormOnBlur />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <RtfTextField />
      </TabPanel>
      <TabPanel value={value} index={3}>
        Advanced Funnel / Wizard Form
      </TabPanel>
    </Box>
  );
}