import { Feedback } from './Widget/FeedbackWidget';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        margin: '0 20px',
        fontSize: 30,
        color: '#010101',
      }}
    >
      <Feedback />
    </div>
  );
};
