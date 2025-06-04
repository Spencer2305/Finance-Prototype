# AI FinancePro Dashboard

A professional AI-powered finance dashboard built with Next.js, featuring neural network analytics, predictive forecasting, invoice management, and compliance reporting.

## 🚀 Features

- **AI-Powered Analytics**: Neural network-driven financial insights
- **Predictive Forecasting**: Machine learning revenue and expense predictions
- **Invoice Management**: Automated processing with ML anomaly detection
- **Compliance Reporting**: AI-powered audit generation and risk assessment
- **Real-time KPIs**: Live financial performance metrics
- **Interactive Charts**: Dynamic data visualization with Recharts
- **Responsive Design**: Optimized for all devices and iframe embedding

## 🛠 Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **Animations**: Framer Motion

## 📦 Deployment

### Netlify Deployment

1. **Connect to Netlify**:
   - Connect your GitHub repository to Netlify
   - The build will automatically use the configuration in `netlify.toml`

2. **Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `out`
   - Node version: 18

3. **Environment Variables** (if needed):
   - No environment variables required for basic deployment

### Manual Deployment

```bash
# Install dependencies
npm install

# Build for production
npm run build

# The built files will be in the 'out' directory
```

## 🖼️ Iframe Embedding

This dashboard is optimized for iframe embedding on executasolutions.com and related domains.

### Basic Embedding

```html
<iframe 
  src="https://your-netlify-domain.netlify.app"
  width="100%"
  height="800"
  frameborder="0"
  scrolling="yes"
  title="AI FinancePro Dashboard">
</iframe>
```

### Responsive Embedding

```html
<div style="position: relative; width: 100%; height: 800px;">
  <iframe 
    src="https://your-netlify-domain.netlify.app"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
    title="AI FinancePro Dashboard">
  </iframe>
</div>
```

### Dynamic Height Adjustment

The dashboard automatically communicates its height to the parent frame. To enable dynamic resizing, add this JavaScript to your parent page:

```javascript
window.addEventListener('message', function(event) {
  if (event.data.type === 'iframe-resize') {
    const iframe = document.querySelector('iframe[src*="your-netlify-domain"]');
    if (iframe) {
      iframe.style.height = event.data.height + 'px';
    }
  }
});
```

## 🔒 Security & Frame Policy

- **X-Frame-Options**: Set to `SAMEORIGIN`
- **Content Security Policy**: Allows framing from `executasolutions.com` and subdomains
- **HTTPS**: Required for production embedding

## 🎨 Customization

The dashboard uses a professional color scheme optimized for financial applications:
- Primary: Purple/Blue gradient
- Success: Green (#10B981)
- Warning: Yellow (#F59E0B)
- Danger: Red (#EF4444)

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint
```

## 📄 License

This project is proprietary software owned by Executa Solutions.

## 🤝 Support

For support or customization requests, contact Executa Solutions at https://executasolutions.com

---

Built with ❤️ by Executa Solutions 