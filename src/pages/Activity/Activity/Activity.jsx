import { Helmet} from 'react-helmet-async';

import Workshop from '../Workshop/Workshop';
import Seminar from '../Seminar/Seminar';
import Contest from '../Contest/Contest';
import Fest from '../Fest/Fest';
import Cultural from '../Cultural/Cultural';
const Activity = () => {
    return (
        <div>
            <Helmet>
        <title>DIIt IT Club | Activity</title>
      </Helmet>
             <Fest></Fest>
            <Workshop></Workshop>
            <Seminar></Seminar>
            <Contest></Contest>
            
            <Cultural></Cultural>
        </div>
    );
};

export default Activity;