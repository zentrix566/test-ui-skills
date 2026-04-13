'use client';

import { useState } from 'react';
import { Eye, EyeOff, Compass } from 'lucide-react';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-sans flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <Compass className="w-8 h-8 text-[#d4af37]" />
          <span className="text-2xl font-semibold tracking-tight">JourneyPro</span>
        </div>

        {/* Card */}
        <div className="bg-[#1e293b] rounded-xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.3)] p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-semibold mb-2">Welcome Back</h1>
            <p className="text-slate-400 text-sm">Sign in to your account to continue</p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-slate-200">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-lg bg-[#0f172a] border border-white/10 focus:border-[#d4af37]/50 focus:outline-none focus:ring-1 focus:ring-[#d4af37]/20 transition-colors text-white placeholder:text-slate-500"
                required
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-medium text-slate-200">
                  Password
                </label>
                <a href="#" className="text-xs text-[#d4af37] hover:text-[#c5a028] transition-colors">
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-lg bg-[#0f172a] border border-white/10 focus:border-[#d4af37]/50 focus:outline-none focus:ring-1 focus:ring-[#d4af37]/20 transition-colors text-white placeholder:text-slate-500 pr-12"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors cursor-pointer p-1"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Remember me */}
            <div className="flex items-center gap-2">
              <input
                id="remember"
                type="checkbox"
                className="w-4 h-4 rounded border-white/10 bg-[#0f172a] text-[#d4af37] focus:ring-[#d4af37]/20 cursor-pointer"
              />
              <label htmlFor="remember" className="text-sm text-slate-400 cursor-pointer">
                Remember me
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-[#d4af37] text-[#0f172a] font-semibold rounded-lg hover:bg-[#c5a028] transition-colors focus:outline-none focus:ring-2 focus:ring-[#d4af37]/30 focus:ring-offset-2 focus:ring-offset-[#1e293b]"
            >
              Sign In
            </button>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-4 bg-[#1e293b] text-slate-400">or continue with</span>
              </div>
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="flex items-center justify-center gap-2 px-4 py-2 border border-white/10 rounded-lg hover:bg-[#0f172a] transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="currentColor" d="M12 23c2.95 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.52H2.83v2.71C4.62 19.13 8.02 23 12 23z"/>
                  <path fill="currentColor" d="M5.84 14.09c-.25-.76-.38-1.56-.38-2.38s.13-1.62.38-2.38V6.63H2.83C1.93 8.45 1.4 10.15 1.4 12s.53 3.55 1.43 5.37l3.01-2.28z"/>
                  <path fill="currentColor" d="M12 5.48c1.69 0 2.83.73 3.48 1.37l2.61-2.61C16.46 2.59 14.42 1 12 1 8.02 1 4.62 4.87 2.83 8.64l3.01 2.28c.87-2.59 3.3-4.52 6.16-4.44z"/>
                </svg>
                <span className="text-sm font-medium">Google</span>
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-2 px-4 py-2 border border-white/10 rounded-lg hover:bg-[#0f172a] transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.228-.252-4.566-1.113-4.566-4.951 0-1.095.39-1.99 1.029-2.691-.103-.253-.446-1.27.095-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 7.044c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.542 1.377.2 2.395.1 2.647.64.701 1.028 1.596 1.028 2.691 0 3.848-2.34 4.698-4.576 4.942.359.309.678.919.678 1.852 0 1.336-.013 2.415-.013 2.742 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
                <span className="text-sm font-medium">GitHub</span>
              </button>
            </div>

            {/* Sign up link */}
            <div className="text-center text-sm text-slate-400 pt-2">
              Don't have an account?{' '}
              <a href="#" className="text-[#d4af37] hover:text-[#c5a028] font-medium transition-colors">
                Sign up
              </a>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-xs text-slate-500">
          By continuing, you agree to our Terms of Service and Privacy Policy.
        </div>
      </div>
    </div>
  );
}
