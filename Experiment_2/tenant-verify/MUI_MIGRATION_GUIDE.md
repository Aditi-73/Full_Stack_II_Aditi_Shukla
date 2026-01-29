# Material-UI Migration Guide - TenantVerify Project

## COMPLETED CONVERSIONS ✅

1. **src/theme.jsx** - Created custom MUI theme with color palette
2. **src/App.jsx** - Updated with ThemeProvider and CssBaseline
3. **src/components/Navbar.jsx** - Converted to MUI components
4. **src/components/Sidebar.jsx** - Converted to MUI Drawer and List components
5. **src/components/StatusBadge.jsx** - Converted to MUI Chip with icons
6. **src/components/HouseCard.jsx** - Converted to MUI Card component
7. **src/pages/Landing.jsx** - Converted to MUI with Accordion, Grid, Cards
8. **src/pages/Auth.jsx** - Converted to MUI Cards and Buttons
9. **src/pages/Dashboard.jsx** - Converted to MUI Paper, Grid, Switch

## REMAINING PAGES TO CONVERT

The following files still need to be converted from Tailwind CSS to MUI. Use the patterns and replacement strategies shown below.

### MIGRATION STRATEGY FOR REMAINING PAGES

For each remaining page, follow this pattern:

**Import Pattern:**
```javascript
import { Box, Container, Grid, Card, CardContent, Button, TextField, Typography, Stack, Paper, Alert } from '@mui/material';
import { [NeededIcon] } from '@mui/icons-material';
```

**Key Component Mappings:**

| Tailwind | Material-UI | Notes |
|----------|-------------|-------|
| `className="flex"` | `sx={{ display: 'flex' }}` | |
| `className="grid grid-cols-3"` | `<Grid container spacing={2}>` | Wrap children in `<Grid item xs={12} md={4}>` |
| `className="rounded-lg"` | `sx={{ borderRadius: '8px' }}` | Or use theme default |
| `className="shadow-lg"` | `sx={{ boxShadow: '0 2px 8px rgba(...)' }}` | |
| `className="text-xl font-bold"` | `<Typography variant="h6" sx={{ fontWeight: 700 }}>` | |
| `className="bg-jet-black text-white"` | `sx={{ backgroundColor: '#1A2D29', color: '#F7F7F2' }}` | |
| `className="border border-gray-300"` | `<TextField variant="outlined" />` | Or `sx={{ border: '1px solid' }}` |
| `className="inline-block px-4 py-2"` | `<Chip label="..." />` or `<Button>` | |

### AreaSelection.jsx

Key changes:
- Replace form inputs with `<TextField variant="outlined" />`
- Replace select with `<TextField select>` with MenuItem children
- Use Box and Stack for layout
- Replace info box with `<Alert>` component

### HouseDetails.jsx

Key changes:
- Use `<Card>` for the main details container
- Replace status boxes with `<Paper>` components
- Use `<Button component={Link}>` for navigation
- Use `<Stack>` for info sections
- Replace blockchain box with `<Paper>` and MUI icons

### RequestDetails.jsx

Key changes:
- Use `<Card>` for form container
- Replace textarea with `<TextField multiline />`
- Replace action buttons with `<Button>` variants
- Success message can use custom component with `<Box>` and `<Typography>`

### OwnerPanel.jsx

Key changes:
- Use `<Card>` for form sections
- Replace form inputs with `<TextField />`
- Use `<Button variant="contained">` for submit
- Use `<Alert>` for success messages

### PoliceDashboard.jsx

Key changes:
- Use `<Tabs>` component instead of custom tabs
- Use `<Table>` component for request lists
- Use `<Button>` for action buttons (Approve/Reject)
- Use `<Chip>` for status badges

### MyRequests.jsx

Key changes:
- Use `<Card>` for each request item
- Use `<Chip>` for status badges
- Use `<Grid>` for layout
- Use `<List>` and `<ListItem>` for information display

### Neighborhood.jsx

Key changes:
- Use `<TextField>` for search input
- Use `<TextField select>` for status filter
- Use `<Grid>` for statistics cards
- Use HouseCard component for properties grid

### BlockchainLogs.jsx

Key changes:
- Use `<Table>` component for transaction logs
- Use `<Chip color="success">` for status
- Use `<Card>` for info cards
- Use `<Alert>` for key points section

### OwnerProperties.jsx

Key changes:
- Use `<Card>` for each property
- Use `<Chip>` for status and occupancy
- Use `<List>` for tenants section
- Use `<Button>` for actions

### TenantRequests.jsx

Key changes:
- Use `<Card>` for each request
- Use `<Chip>` for status and documents
- Use `<Button>` for actions
- Use `<Stack>` for layout

### VerificationQueue.jsx

Key changes:
- Use `<Card>` with left border (sx={{ borderLeft: '4px solid' }})
- Use `<Chip>` for priority and status
- Use `<Button>` for actions
- Use statistics cards at top

### HistoryRequests.jsx

Key changes:
- Use `<Card>` for each request
- Use `<Chip>` for status
- Use statistics cards
- Use `<Paper>` for details section

## COLOR PALETTE REFERENCE

```javascript
const colors = {
  primary: '#254439',        // pine-teal
  secondary: '#1A2D29',      // jet-black
  background: '#F7F7F2',     // porcelain
  text: {
    primary: '#1A2D29',      // jet-black
    secondary: '#89928E',    // grey-olive
    disabled: '#B6BDBB'      // ash-grey
  }
};
```

## IMPORTANT: UPDATE package.json

Make sure you have installed required dependencies:

```bash
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
```

## CUSTOM THEME USAGE

The custom theme is applied in App.jsx with `<ThemeProvider>`. All MUI components will automatically use:
- Custom color palette
- Font family (Poppins/Roboto)
- Border radius (8px default)
- Box shadows
- Typography styles

## CONVERSION CHECKLIST

- [ ] Auth.jsx - Complete MUI conversion
- [ ] Dashboard.jsx - Complete MUI conversion
- [ ] AreaSelection.jsx
- [ ] HouseDetails.jsx
- [ ] RequestDetails.jsx
- [ ] OwnerPanel.jsx
- [ ] PoliceDashboard.jsx
- [ ] MyRequests.jsx
- [ ] Neighborhood.jsx
- [ ] BlockchainLogs.jsx
- [ ] OwnerProperties.jsx
- [ ] TenantRequests.jsx
- [ ] VerificationQueue.jsx
- [ ] HistoryRequests.jsx
- [ ] Verify all imports work correctly
- [ ] Test app in browser
- [ ] Remove App.css (no longer needed)

## TESTING STRATEGY

After each page conversion:
1. Check console for errors
2. Verify styling matches the original
3. Test responsive behavior (xs, sm, md, lg)
4. Verify all icons display correctly
5. Test interactive elements (buttons, forms, tabs)

## NOTES

- All color references using custom CSS variables (jet-black, pine-teal, etc.) should be replaced with hex values
- Emoji icons should be replaced with MUI Icons
- All className usage should be replaced with sx prop or MUI components
- Responsive classes (md:, lg:, etc.) should use sx prop with responsive values: sx={{ fontSize: { xs: '1rem', md: '1.5rem' } }}

Good luck with the conversion!
