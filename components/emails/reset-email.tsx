import * as React from "react";
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
} from "@react-email/components";

interface PasswordResetEmailProps {
  userEmail: string;
  resetUrl: string;
  userName: string;
  requestTime: string;
}

const PasswordResetEmail = ({
  userEmail,
  resetUrl,
  userName,
  requestTime,
}: PasswordResetEmailProps) => {
  return (
    <Html lang="en" dir="ltr">
      <Tailwind>
        <Head />
        <Preview>Reset your password - Action required within 1 hour</Preview>
        <Body className="bg-gray-100 font-sans py-[40px]">
          <Container className="bg-white rounded-[8px] px-[48px] py-[40px] max-w-[600px] mx-auto">
            {/* Header */}
            <Section className="text-center mb-[32px]">
              <Heading className="text-[28px] font-bold text-gray-900 m-0 mb-[8px]">
                Password Reset Request
              </Heading>
              <Text className="text-[16px] text-gray-600 m-0">
                We received a request to reset your password
              </Text>
            </Section>

            {/* Main Content */}
            <Section className="mb-[32px]">
              <Text className="text-[16px] text-gray-700 mb-[16px] m-0">
                Hi {userName || "there"},
              </Text>
              <Text className="text-[16px] text-gray-700 mb-[16px] m-0">
                We received a request to reset the password for your account
                associated with <strong>{userEmail}</strong>.
              </Text>
              <Text className="text-[16px] text-gray-700 mb-[24px] m-0">
                If you made this request, click the button below to reset your
                password. If you didn&apos;t request a password reset, you can safely
                ignore this email.
              </Text>

              {/* Reset Button */}
              <Section className="text-center mb-[32px]">
                <Button
                  href={resetUrl}
                  className="bg-red-600 text-white px-[32px] py-[16px] rounded-[8px] text-[16px] font-semibold no-underline box-border"
                >
                  Reset My Password
                </Button>
              </Section>

              <Text className="text-[14px] text-gray-600 mb-[16px] m-0">
                If the button above doesn't work, you can also copy and paste
                the following link into your browser:
              </Text>
              <Text className="text-[14px] text-blue-600 break-all mb-[24px] m-0">
                {resetUrl}
              </Text>

              {/* Time Information */}
              <Section className="bg-orange-50 border-l-4 border-orange-400 p-[16px] mb-[24px]">
                <Text className="text-[14px] text-orange-800 mb-[8px] m-0 font-semibold">
                  ⏰ Time Sensitive
                </Text>
                <Text className="text-[14px] text-orange-700 mb-[4px] m-0">
                  This password reset link will expire in{" "}
                  <strong>1 hour</strong> for security reasons.
                </Text>
                <Text className="text-[12px] text-orange-600 m-0">
                  Request made on: {requestTime}
                </Text>
              </Section>
            </Section>

            {/* Security Information */}
            <Section className="border-t border-gray-200 pt-[24px] mb-[32px]">
              <Text className="text-[14px] text-gray-600 mb-[16px] m-0 font-semibold">
                🔒 Security Information:
              </Text>
              <Text className="text-[14px] text-gray-600 mb-[8px] m-0">
                • This link can only be used once
              </Text>
              <Text className="text-[14px] text-gray-600 mb-[8px] m-0">
                • Never share this reset link with anyone
              </Text>
              <Text className="text-[14px] text-gray-600 mb-[8px] m-0">
                • If you didn't request this reset, your account is still secure
              </Text>
              <Text className="text-[14px] text-gray-600 mb-[16px] m-0">
                • Consider using a strong, unique password for better security
              </Text>

              <Text className="text-[14px] text-gray-600 m-0">
                If you're having trouble or didn't request this reset, please
                contact our support team immediately.
              </Text>
            </Section>

            {/* Footer */}
            <Section className="border-t border-gray-200 pt-[24px] text-center">
              <Text className="text-[12px] text-gray-500 mb-[8px] m-0">
                Need help? Contact our support team
              </Text>
              <Text className="text-[12px] text-gray-500 mb-[16px] m-0">
                <Link
                  href="mailto:support@company.com"
                  className="text-blue-600 no-underline"
                >
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

export default PasswordResetEmail;
