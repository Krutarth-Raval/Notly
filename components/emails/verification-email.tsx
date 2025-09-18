import * as React from 'react';
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
  Tailwind,
} from '@react-email/components';
interface VerificationEmailProps {
  userName: string;
  verificationUrl: string;
}
const VerificationEmail = ({ userName, verificationUrl }: VerificationEmailProps) => {

  return (
    <Html lang="en" dir="ltr">
      <Tailwind>
        <Head />
        <Preview>Verify your email address to complete your account setup</Preview>
        <Body className="bg-gray-100 font-sans py-[40px]">
          <Container className="bg-white rounded-[8px] px-[48px] py-[40px] max-w-[600px] mx-auto">
            {/* Header */}
            <Section className="text-center mb-[32px]">
              <Heading className="text-[28px] font-bold text-gray-900 m-0 mb-[8px]">
                Verify Your Email Address
              </Heading>
              <Text className="text-[16px] text-gray-600 m-0">
                Welcome to our platform! Please verify your email to get started.
              </Text>
            </Section>

            {/* Main Content */}
            <Section className="mb-[32px]">
              <Text className="text-[16px] text-gray-700 mb-[16px] m-0">
                Hi {userName || 'there'},
              </Text>
              <Text className="text-[16px] text-gray-700 mb-[24px] m-0">
                Thanks for signing up! To complete your account setup and ensure the security of your account, please verify your email address by clicking the button below.
              </Text>
              
              {/* Verification Button */}
              <Section className="text-center mb-[32px]">
                <Button
                  href={verificationUrl}
                  className="bg-blue-600 text-white px-[32px] py-[16px] rounded-[8px] text-[16px] font-semibold no-underline box-border"
                >
                  Verify Email Address
                </Button>
              </Section>

              <Text className="text-[14px] text-gray-600 mb-[16px] m-0">
                If the button above doesn't work, you can also copy and paste the following link into your browser:
              </Text>
              <Text className="text-[14px] text-blue-600 break-all mb-[24px] m-0">
                {verificationUrl}
              </Text>

              <Text className="text-[14px] text-gray-600 mb-[16px] m-0">
                This verification link will expire in 24 hours for security reasons. If you didn't create an account with us, you can safely ignore this email.
              </Text>
            </Section>

            {/* Security Notice */}
            <Section className="border-t border-gray-200 pt-[24px] mb-[32px]">
              <Text className="text-[14px] text-gray-600 mb-[8px] m-0 font-semibold">
                Security Notice:
              </Text>
              <Text className="text-[14px] text-gray-600 m-0">
                For your security, never share this verification link with anyone. Our team will never ask you for your password or verification link via email.
              </Text>
            </Section>

            {/* Footer */}
            <Section className="border-t border-gray-200 pt-[24px] text-center">
              <Text className="text-[12px] text-gray-500 mb-[8px] m-0">
                If you have any questions, feel free to contact our support team.
              </Text>
              <Text className="text-[12px] text-gray-500 mb-[16px] m-0">
                <Link href="mailto:support@company.com" className="text-blue-600 no-underline">
                  support@company.com
                </Link>
              </Text>
              
              <Text className="text-[12px] text-gray-400 mb-[8px] m-0">
                Company Name, 123 Business Street, City, State 12345
              </Text>
              <Text className="text-[12px] text-gray-400 m-0">
                <Link href="#" className="text-gray-400 no-underline mr-[16px]">
                  Unsubscribe
                </Link>
                © 2025 Company Name. All rights reserved.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};



export default VerificationEmail;