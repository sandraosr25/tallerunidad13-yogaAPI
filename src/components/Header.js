import { Header as Head} from 'semantic-ui-react';

export default function Header(params) {
    return(
        <div className='header'>
            <Head as="h1">
                <Head.Content>Las 6 posturas (Asanas) de Yoga principales</Head.Content>
            </Head>
        </div>
    )
};
