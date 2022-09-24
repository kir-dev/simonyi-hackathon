import { Box, CircularProgress, CircularProgressLabel, Flex, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { AbsolutePaths } from '../../../util/paths'
import { TaskCategoryPreview } from '../../../util/views/task.view'

export const TaskCategoryListItem = ({ category }: { category: TaskCategoryPreview }) => {
  return (
    <Box borderColor="gray.500" borderWidth="1px" px={6} py={2} borderRadius="md" _hover={{ bgColor: 'brand.500' }}>
      <Link to={`${AbsolutePaths.TASKS}/category/${category.categoryId}`}>
        <Flex align="center" justifyContent="space-between">
          <Text fontWeight="bold" fontSize="xl">
            {category.name}
          </Text>
          <CircularProgress
            value={((category.approved + category.notGraded) / category.sum) * 100}
            color={category.notGraded > 0 ? 'yellow.400' : 'green.400'}
          >
            <CircularProgressLabel>
              {category.approved + category.notGraded}/{category.sum}
            </CircularProgressLabel>
          </CircularProgress>
        </Flex>
      </Link>
    </Box>
  )
}
