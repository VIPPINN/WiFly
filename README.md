# WiFly - WiFi Network Management App

WiFly is a React Native mobile application for managing WiFi networks and providing support services. Built for Tecnored client.

## Features

- **Authentication**: Login, registration, and password recovery
- **WiFi Network Management**: View and manage your WiFi networks
- **Connected Devices**: Monitor devices connected to your networks
- **Support System**: Create and manage support tickets
- **Chatbot Integration**: AI-powered support assistance (coming soon)

## Tech Stack

- **Frontend**: React Native 0.82.0
- **Navigation**: React Navigation 6
- **State Management**: React Context API
- **HTTP Client**: Axios
- **Storage**: AsyncStorage
- **Backend**: Spring Boot with Hibernate (separate repository)

## Prerequisites

- Node.js (v16 or higher)
- React Native CLI
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)
- Java Development Kit (JDK 17)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd WiFly
```

2. Install dependencies:
```bash
npm install
```

3. For iOS (macOS only):
```bash
cd ios
pod install
cd ..
```

## Running the App

### Android
```bash
npx react-native run-android
```

### iOS
```bash
npx react-native run-ios
```

## Project Structure

```
src/
├── components/          # Reusable UI components
├── contexts/           # React Context providers
├── navigation/         # Navigation configuration
├── screens/           # Screen components
├── services/          # API services
├── types/             # TypeScript type definitions
└── utils/             # Utility functions
```

## API Integration

The app connects to a Spring Boot backend API. Make sure the backend server is running on `http://localhost:8080/api` before testing the app.

## Development

### Adding New Screens
1. Create the screen component in `src/screens/`
2. Add the screen to the navigation stack in `src/navigation/AppNavigator.tsx`
3. Update the navigation types if needed

### API Services
- API calls are centralized in `src/services/api.ts`
- Use the provided `authAPI`, `wifiAPI`, and `supportAPI` objects
- All requests include automatic token handling

### State Management
- Authentication state is managed through `AuthContext`
- Use the `useAuth` hook to access user data and authentication methods

## Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly on both platforms
4. Submit a pull request

## License

This project is proprietary software developed for Tecnored.