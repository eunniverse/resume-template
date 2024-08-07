import nextTranspileModules from 'next-transpile-modules';


/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    webpack: (config, { dev }) => {
        // node_modules 내의 트랜스파일된 패키지를 Babel로 처리
        config.module.rules.push({
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                    plugins: ['@babel/plugin-transform-runtime'],
                },
            },
        })
        return config;
    }
};

export default nextConfig;
