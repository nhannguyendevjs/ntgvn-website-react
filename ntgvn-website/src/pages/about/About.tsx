import { activeRoute } from '../../utils/stores/app-store.js';

function About() {
    console.log('About Page activated');

    activeRoute('about');

    return (
        <>
            <div>About</div>
        </>
    );
}

export default About;
