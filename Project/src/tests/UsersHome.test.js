import { render, screen } from '@testing-library/react';
import UsersHome from '../pages/UsersHome';

test('renders Usershome page', () => {
    render(<Question />);
    const defaultfirstname = screen.getByText("Madivh");
    expect(defaultfirstname).toBeInTheDocument();
    const defaultlastname = screen.getByText("Kassel");
    expect(defaultlastname).toBeInTheDocument();
    const defaultemail = screen.getByText("zhuoang2@iilinois.edu");
    expect(defaultemail).toBeInTheDocument();
    const defaultage = screen.getByText(20);
    expect(defaultage).toBeInTheDocument();
    const defaultcollege = screen.getByText("UIUC");
    expect(defaultcollege).toBeInTheDocument();
    const defaultbio = screen.getByText("I am a computer sciecne student in UIUC. I love to write code and solve problems.");
    expect(defaultbio).toBeInTheDocument();
    const defaultinterests = screen.getByText(['Programming', 'Gaming', 'Soccer']);
    expect(defaulinterests).toBeInTheDocument();
});